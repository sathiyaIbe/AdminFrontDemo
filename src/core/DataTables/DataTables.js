
import PropTypes from 'prop-types';
import './DataTables.css'
 
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { ApiCapGet } from '../../services/apiCapRegister/apiCapRegister';
import { GetUserDetailsApi } from '../../services/UserService/UserService';
import { DeleteUserApi } from '../../services/UserService/UserService';
import { UserService } from '../../services/UserService/UserService';
import 'primeicons/primeicons.css';
import { DeleteMultipleUserApi } from '../../services/UserService/UserService';
import { UpdateUserApi } from '../../services/UserService/UserService';
import { elementAcceptingRef } from '@mui/utils';
import Context from '../../services/Context/Context';

 




const DataTables = (props) => {



    let emptyProduct = {
        _id:'',
        username: '',
        email: '',
        status: null,
    };

    const [products, setProducts] = useState(null);
    const [load, setLoad]=useState(false)
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    

    useEffect(() => {
      GetUserDetailsApi().then(res=>{
       
        const data=res.data
      const datas=  data.map(each=>{
            const id= Number(data.indexOf(each))+1
            return {...each,id}
        })
        console.log(datas)
        setProducts(datas)
      })

      setLoad(true)
      


},[]); // eslint-disable-line react-hooks/exhaustive-deps


  
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const openNew = () => {

        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }

    const saveProduct = () => {
        setSubmitted(true);
        const createUId=(val)=>{
            console.log(val)
        let id = val+"-";
            let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < 5; i++) {
                id += (Math.floor(Math.random() * 9));
                if (id.length===8){
                    return id;
                }
                else if(id.length>8){
                    id=val
                }
            }
           
        }
    
            let _products = [...products];
            let _product = {...product};

                const index = findIndexById(product.id);

                _products[index] = _product;
              const isUpdated=products.filter(each=>each._id===_product._id)
               const noid= createUId(product.username.substring(0,4))
               console.log(noid)
                if (isUpdated.length===0) {
                    const details={
                        username: product.username,
                        email:product.email,
                        status:product.status,
                       
                    }
                    
                    UserService(details).then(res=>{
                        const data=res.data
                        
                         const id=products.length + 1
                       

                        
                        _products.push({...data,id});

                        setProducts(_products)
                        setProduct(emptyProduct);
                    })
                     
                   
    
                    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000, });
                   
                  
            }
            else {
             
                const data={
                    username:_product.username,
                    status: _product.status,
                    email:_product.email,
                }
                UpdateUserApi(_product).then(res=>{
                    
                    const dataId=res.data._id
                    const id=products.findIndex(each=>{
                      
                        if (each._id===dataId){
                            return each._id
                        }
                    })
                   console.log(res.data)
                   const sId=(products[id].id)
                  products[id]={...res.data,id:sId}
                  console.log(products)
                  setProducts(products)
                  setProduct(emptyProduct);
                }).catch(err=>{
                    console.log(err)
                })
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
                  setProductDialog(false);
    }

    const editProduct = (product) => {
      
        setProduct({...product});
        setProductDialog(true);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
     
      DeleteUserApi(product._id).then(res=>{
        let _products = products.filter(val => val._id !== product._id);
    
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      })
       
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            const importedData = data.map(d => {
                d = d.split(',');
                const processedData = cols.reduce((obj, c, i) => {
                    c = c === 'Status' ? 'inventoryStatus' : (c === 'Reviews' ? 'rating' : c.toLowerCase());
                    obj[c] = d[i].replace(/['"]+/g, '');
                    (c === 'price' || c === 'rating') && (obj[c] = parseFloat(obj[c]));
                    return obj;
                }, {});

                processedData['id'] = createId();
                return processedData;
            });

            const _products = [...products, ...importedData];

            setProducts(_products);
        };

        reader.readAsText(file, 'UTF-8');
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
   
      const data={
        id:"asdf",
        
      }
       const ids=selectedProducts.map(each=>{
       var data ={"_id": each._id}
        return data
       })
    
      
       
        DeleteMultipleUserApi(ids).then(res=>{
            console.log('deleted multiple')
        })
        let _products = products.filter(val => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let _product = {...product};
        _product['status'] = e.value;
        setProduct(_product);
    }

    const onInputChange = (e, username) => {

        const val = (e.target && e.target.value) || '';
        let _product = {...product};
        _product[`${username}`] = val;

        setProduct(_product);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = {...product};
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="New" icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment  >
                <FileUpload mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php" accept=".csv" chooseLabel="Import" className="mr-2 inline-block" onUpload={importCSV} />
                <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />
            </React.Fragment>
        )
    }



    const statusBodyTemplate = (rowData) => {
      
        return <span className={`product-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header dark-bg">
            <h5 className="mx-0 my-1">Manage Users</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText className='dark-bg'  type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
        <Context.Consumer>
            {value=>{
           const  {sidebar}=value
           return(

          

      load &&
        <div className="datatable-crud-demo " data-testid="DataTable">
      
       
            

            <div className={`cards ${sidebar ?'sidebar-table' :''}`}>
                <Toolbar   className="mb-4 dark-bg " left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <Toast ref={toast}  />
                
                <DataTable   className="dark-bg" ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="_id" paginator rows={5} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter} header={header} responsiveLayout="scroll" >
                        
                    { <Column   className="dark-bg" selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column> }
                    <Column  className="dark-bg" field="id" header="User Id" sortable style={{ minWidth: '12rem' }}></Column>
                    {/* //<Column field="createdAt" header="Date Created" sortable style={{ minWidth: '12rem' }}></Column> */}
 
                    <Column  className="dark-bg" field="username" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column className="dark-bg" field="email" header="Email" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column className="dark-bg" field="status" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }} ></Column>
                    <Column className="dark-bg" body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </div>

            <Dialog   visible={productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid dark-bg" footer={productDialogFooter} onHide={hideDialog}>
                <div className="field ">
                    <label htmlFor="username">Name</label>
                    <InputText id="username" value={product.username} onChange={(e) => onInputChange(e, 'username')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.username })} />
                    {submitted && !product.username && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <InputText id="email" value={product.email} onChange={(e) => onInputChange(e, 'email')} required />
                </div>

                <div className="field">
                    <label className="mb-3">Status</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="status" value="active" onChange={onCategoryChange} checked={product.status === 'active'} />
                            <label htmlFor="category1">Active</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="status" value="inactive" onChange={onCategoryChange} checked={product.status === 'inactive'} />
                            <label htmlFor="category2">In Active</label>
                        </div>
                      
                    </div>
                </div>

                {/* <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price">Price</label>
                        <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity">Quantity</label>
                        <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} integeronly />
                    </div>
                </div> */}
            </Dialog>

            <Dialog dark-bg visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Are you sure you want to delete <b>{product.name}</b>?</span>}
                </div>
            </Dialog>

            <Dialog dark-bg visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    

    )}}
    </Context.Consumer>           

);
    }

DataTables.propTypes = {};

DataTables.defaultProps = {};

export default DataTables;
