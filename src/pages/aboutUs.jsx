import React from 'react';
import Jumbotron from '../components/jumbotron';
import Mission from '../components/mission';
import JoinUs from '../components/joinUs';

const About = () => {
  return (
    <div>
      <Jumbotron title="About Us." subheader={["What we are", "Our mission", "Our vision"]} />
      
      {/* Section 1 */}
      <div className='flex gap-4 justify-center py-20 text-left'>
        <div className='flex w-1/2 gap-4 justify-evenly align-baseline'>
          <img src="/hello.png" className='h-60 w-60 mt-auto' alt="" />
          <img src="/hello.png" className='h-80 w-72' alt="" />
        </div>
        <div className='w-1/2 flex flex-col space-y-8'>
          <h2 className='text-xl'>About us</h2>
          <h3 className='text-3xl font-semibold w-2/3'>"Who We Are: Empowering Heroes, Saving Lives"</h3>
          <p className='w-3/4'>Together, we’re building a world where every drop of blood can be a beacon of hope."</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className='flex py-20 text-left align-middle justify-around'>
        <div className='w-1/2 leading-[40px]'>
          Blood Hero is a revolutionary platform that connects blood donors with those in need, enabling swift responses to save lives and empower communities. At Blood Hero, we believe that every individual has the power to save lives, and we are here to make that process seamless, efficient, and impactful. Whether you're a donor, recipient, or a medical professional, Blood Hero is designed to bridge the gap between those in need and those who can help.
        </div>
        <div className="h-80 bg-cover bg-center w-1/3 bg-red-400 rounded-lg bg-[url(/abut.svg)]"></div>
      </div>

      {/* Section 3 - Mission */}
      <div className='flex gap-20 justify-center py-20 text-right'>
        <img src="sick.png" className='h-96' alt="" />
        <div className='flex flex-col w-1/3 text-sm space-y-4 leading-loose'>
          <hr className='h-1 bg-red-400 w-40 ml-auto' />
          <h2 className='font-semibold text-xl'>Our Mission.</h2>
          <p>
            Our mission is to save lives by building a connected, compassionate, and reliable blood donation ecosystem. Through innovation and collaboration, we aim to:
          </p>
          <ul className='space-y-4 text-sm'>
            <li>Encourage Donations: Inspire individuals to become regular blood donors by making the process easy and rewarding.</li>
            <li>Facilitate Access: Ensure that hospitals, clinics, and individuals can access life-saving blood quickly and efficiently.</li>
            <li>Promote Awareness: Educate communities about the importance of blood donation and debunk common myths.</li>
          </ul>
        </div>
      </div>

      {/* Section 4 - Vision */}
      <div className='flex flex-row-reverse gap-20 justify-center py-20 text-left'>
        <img src="sick.png" className='h-96' alt="" />
        <div className='flex flex-col w-1/3 text-sm space-y-4 leading-loose'>
          <hr className='h-1 bg-red-400 w-40 mr-auto' />
          <h2 className='font-semibold text-xl'>Our Vision.</h2>
          <p>A world where no one dies because of a shortage of blood.</p>
          <h4 className='text-xl font-semibold mb-2'>What Makes Blood Hero Different?</h4>
          <ol className='space-y-4 text-sm leading-loose'>
            <li>Real-Time Connectivity: Blood Hero uses location-based technology to match donors and recipients in real time. Whether it’s an emergency or a planned donation, we ensure fast and accurate matches.</li>
            <li>User-Friendly Experience: Our intuitive interface makes it easy for anyone to sign up, schedule donations, and monitor their impact.</li>
          </ol>
        </div>
      </div>

      <Mission />
      <div className='flex gap-14 justify-center mx-auto w-fit py-20 text-left'>
        <div className='flex w-fit gap-4 justify-evenly align-baseline'>
          <img src="/help.png" className='h-80 w-80' alt="" />
        </div>
        <div className='w-1/2 flex flex-col justify-center space-y-8'>
          <h2 className='text-xl font-semibold'>Our Features at a Glance:</h2>
      <ul className='space-y-4'>
            <li>Real-time donor-recipient matching.</li>
            <li>Smart alerts for urgent blood needs. </li>
            <li>Health insights for donors and recipients.</li>
            <li>Tools to track the impact of your donations.</li>
        </ul>  </div>
      </div>

      <JoinUs />
    </div>
  );
};

export default About;
