import React from 'react'
import Navbar from '../Navbar'
import '../styles/global.css'
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards'

const page = () => {
  const reviews = [
    {
      quote : 'The best app i have used for finding nearby turfs till date . It helps me to book turf without any hassle and quickly so i can play without worrying about to book.' , 
      name : 'Durgesh Rathore' , 
      title: 'Easy to use'
    } ,
    {
      quote : 'I find this application the best application to book turf as i play football too on my free time so. Definitely must give it a try' , 
      name : 'Abhishek Trivedi' , 
      title: 'Must give it a try'
    } ,  
  ]
  return (
    <div id='Aboutpage'>
      <Navbar/>
      <h1 className='text-center text-2xl m-5' id='h1'>
        About us
      </h1>
      <p className='m-10 leading-10' id='para'>
      We have designed a user-friendly website and application to make booking nearby turfs a breeze. Our platform ensures that you don’t have to stress about finding a turf , instead, you can focus on enjoying the game. With just a few clicks, you can secure a spot at the best turfs around your location, so you never miss out on the fun.
But that’s not all—our app is packed with features tailored to enhance your experience. Whether you’re new in town or just looking for some friendly competition, we’ve got you covered. If you don’t have friends to play with, no worries! Our app allows you to connect with other players, making it easy to find teammates and make new friends.
For those who love a challenge, you can compete with yourself by breaking your own records and tracking your progress over time. Plus, our platform provides detailed information about the amenities available at each turf, so you know exactly what to expect when you arrive.
We’ve worked hard to ensure our application and website are not only easy to use but also packed with all the features you need to have a great time. So, whether you're a seasoned player or just starting, our app is your go-to solution for a hassle-free turf booking experience.
      </p>
      <div>
        <InfiniteMovingCards items={reviews} direction='left' pauseOnHover={false} speed='normal' className='bg-transparent border'/>
      </div>
    </div>
  )
}

export default page
