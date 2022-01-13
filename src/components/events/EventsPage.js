import React from 'react'
import EventSidebar from './EventSidebar'
import EventCard from './EventCard'
import styles from './EventsPage.module.css'
import EventsList from './EventsList'

export default function EventsPage() {
    return (
        <>
            <div className={styles.eventBody}>
            <div className={` ${styles.container}`}>
            <div className={`${styles.eventLeft}`}>
                <EventSidebar />
            </div>           

            <div className={styles.eventMid}>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>   
                  
            <div className={`${styles.eventRight}`} >
               <EventsList 
               eventHead="Events you are hosting" 
                eventDetail={
                [ 
                    ["First event name" , "2pm , 1st Jan"], 
                    ["Second event name" , "2pm , 2nd Jan"], 
                    ["Third event name" , "2pm , 3rd Jan"], 

                ]}
               />
               <EventsList 
               eventHead="Events you are attending" 
                eventDetail={
                [ 
                    ["First event name" , "2pm , 1st Jan"], 
                    ["Second event name" , "2pm , 2nd Jan"], 
                    ["Third event name" , "2pm , 3rd Jan"], 

                ]}
               />
            </div>
            </div>
            </div>
        </>
    )
}
