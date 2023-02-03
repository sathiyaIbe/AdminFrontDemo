import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'primereact/chart';
import './AdminDashboard.css';
import {useNavigate } from 'react-router-dom'
import Header from '../../core/header/header';
import { MDBContainer } from "mdbreact";
import { Doughnut } from "react-chartjs-2";
import { AiOutlineMenu } from 'react-icons/ai'
import {BsCurrencyDollar} from 'react-icons/bs'
import {MdOutlineFlight} from 'react-icons/md'
import {CiUser} from 'react-icons/ci'
import {RxCross1} from 'react-icons/rx'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import Context from '../../services/Context/Context';
import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';  
import 'mdbreact/dist/css/mdb.css';
import { CChart } from '@coreui/react-chartjs'
import {Chrono} from 'react-chrono'

import { CountUserApi } from '../../services/UserService/UserService';



const AdminDashboard = () => {
  const [sidebar, setSidebar]=useState(true)
  const [userCount,setUserCount]=useState('')
 
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
   
    useEffect(()=>{
        CountUserApi().then(res=>{
            console.log(res)
            setUserCount(res.data.count)

        })
    },[userCount])
  
  const navigate=useNavigate()

  const logoutHandler=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  const chronoData = [
    {
      title: "25 May 2020",
     
      contentText:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`
    },
    {
      title: "25 July 2021",
      contentTitle: "The Battle of Britain",
      contentText: `RAF Spitfire pilots scramble for their planes`,
      contentDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
        The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`
    },
    {
      title: "01 June 2022",
      contentTitle: "Operation Barbarossa",
      contentText: `A column of Red Army prisoners taken during the first days of the German invasion`,
      contentDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
        Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
        On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`
    },
    {
      title: "7 December 2022",
      contentTitle: "Pearl Harbor",
      contentText: `The destroyer USS Shaw explodes in dry dock after being hit by Japanese aircraft`,
      contentDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt, followed by Britain and the Netherlands, ordered the freezing of Japanese assets.
        Many Japanese now believed that there was no alternative between economic ruin and going to war with the United States and the European colonial powers. In October 1941, a hardline government under General Hideki Tojo came to power, and preparations were made to deliver a devastating blow against the Americans.`
    },
]

  const dataaaa = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Active',
            backgroundColor: "#74b87e",
            borderColor: "green",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'In Active',
            backgroundColor: '#db8074',
            borderColor: "red",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
        legend: {
            labels: {
                fontColor: "gray"
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: "gray",
                font: {
                    weight: 500
                }
            },
            grid: {
                display: false,
                drawBorder: false
            }
        },
        y: {
            ticks: {
                color: "gray"
            },
            grid: {
                color: "gray",
                drawBorder: false
            }
        }
    }
};

  const [chartData] = useState({
    labels: ['New User', 'Bookings', 'Revenue'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D"
            ]
        }
    ]
});


const [lightOptions] = useState({
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    }
});


const [lineStylesData] = useState({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: .4,
          borderColor: '#42A5F5'
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
         
          tension: .4,
          borderColor: '#66BB6A'
      },
      {
          label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: 'grey',
          tension: .4,
          
      }
  ]
});
let basicOptions = {
  maintainAspectRatio: false,
  aspectRatio: .6,
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: '#495057'
          },
          grid: {
              color: '#ebedef'
          }
      },
      y: {
          ticks: {
              color: '#495057'
          },
          grid: {
              color: '#ebedef'
          }
      }
  }
};

const [chartDatas] = useState({
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
      {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
      }
  ]
});

const [lightOptionss] = useState({
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      }
  },
  scales: {
      r: {
          pointLabels: {
              color: '#495057',
          },
          grid: {
              color: '#ebedef',
          },
          angleLines: {
              color: '#ebedef'
          }
      }
  }
});

  return(
    <Context.Consumer>
        {value=>{
        const{sidebar}=value
        
        return(
  <div className="AdminDashboard" data-testid="AdminDashboard">
    <div className='card-container'>
    <Header />
    <div className={`admin-dashboard-body-container  ${sidebar ?'sidebar-admin' :''}`} >
        <h1 className='admin-dashboard-heading'>Admin Dashboard</h1>
        <div className= {`card-main-container   ${sidebar ?'sidebar-card-main-container ' :''}`} >
        <div className='card-body-container'>
        <div className='dashboard-card-container'>
        <Card className='card' title='Users'>
            <div className='card-description-container'>
            <CiUser className='icon-card user' />
            <div>
        <h3 className=" card-title" > {userCount}</h3>
        <p className='card-subtitle'><span className='subtitle'>12%</span> increase</p>
        </div>
        </div>
        </Card>
        <Card  className='card' title="Total Booking" >
        
        <div className='card-description-container'>
            <MdOutlineFlight className='icon-card booking' />
            <div>
        <h3 className=" card-title" > 350</h3>
        <p className='card-subtitle'><span className='subtitle'>5%</span> increase</p>
        </div>
        </div>
        </Card>
        <Card  className='card' title="Revenue" >
           
            
        <div className='card-description-container'>
            <BsCurrencyDollar className='icon-card revenue' />
            <div>
        <h3 className=" card-title" >$45,105</h3>
        <p className='card-subtitle'><span className='subtitle'>27%</span> increase</p>
        </div>
        </div>
        </Card>
        </div>
         <div className="card-charts-dashboard">
            <h3  className='card-main-heading'>Month Wise Data</h3>
            <Chart className='charts' type="line" data={lineStylesData} options={basicOptions} />
            </div>
<div className='static-table-cotainer'>
    <h3 className='card-main-heading'>User Details</h3>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
<div className="card-bar-table-dashboard">
<h3 className='card-main-heading'>User Status</h3>
            <Chart type="bar" data={dataaaa} options={options} />
</div>
        </div>
        <div className='pie-radar-container'>
        <div className="card-pie-dashboard">
        <h3 className='card-main-heading'>Overall Performance</h3>
     <div className='position-container'>
    <CChart className='pie-dashboard' type="polarArea" data={chartData} />
    </div>
    </div>
    <div className="card-radar-dashboard">
    <h3 className='card-main-heading'>Past Month</h3>
     <div className='position-container'>
        <CChart className='radar-dashboard' type="radar" data={chartDatas}   />
        </div>
    </div>
    <div className='card-chrono-dashboard'>
    <div style={{ width: "90%", height: "745px" }}>
    <h3 className='card-main-heading side'>Recent Activity</h3>
  
        <Chrono  items={chronoData} mode="VERTICAL_ALTERNATING" >
       
            {chronoData.map(each=>(
                <p>{each.contentText}</p>
  ))}
        </Chrono>

      </div>
    </div>
    
    </div> 
    </div>
    </div>
    </div>   
</div>
 )  }}
   </Context.Consumer>
)};

AdminDashboard.propTypes = {};

AdminDashboard.defaultProps = {};

export default AdminDashboard;
