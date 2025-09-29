import {useState} from 'react';

export default function Tabs({ tabsContent, onChange })
{
    const [currentTabIndex, setCurrentTab] = useState(0);

    return (

        <div className="wrapper">
          <div className="heading">
             {tabsContent.map((tabItem)=> (
                c
             ))}
          </div>
        </div>
    )
}