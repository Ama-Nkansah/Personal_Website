import {Typewriter}  from 'react-simple-typewriter';

export default function Title(){
  return (
    <div className='inline-block'>
      <Typewriter
            words={[
              'AI Enthusiast',
              'Full-Stack Developer',
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            delaySpeed={1000}
          />
    </div>
  );
};