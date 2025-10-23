import React from 'react'

const Contact = () => {
  const ContactIcons = [
    
  ]
  return (
    <div  className="pt-20 pb-20 dark:bg-neutral-900 bg-gray-50 h-full">
    <div className="container mx-auto px-6 text-center">
      <h2 id='contact' className="text-3xl font-semibold dark:text-white text-gray-800 mb-6">
        Contact Me
      </h2>
      <p className="text-lg dark:text-white text-gray-700 mb-8">
        Feel free to reach out! You can contact me via  <br /> Email: TanushKumar650@gmail.com
       <br /> Number: 650-218-4892 
      </p>
      <div className="flex justify-center">
        <div>
        <a href="https://github.com/NushK650">
          <img src="./Icons/github.svg" alt="github" />
        </a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/tanush-kumar-aab68135b/details/skills/">
          <img src="./Icons/linkedin.svg"  alt="linkedin" />
        </a>
        </div>
        <div>
        <a href="./ResumeV4.pdf">
          <img src="./Icons/file-user.svg" alt="resume" />
        </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact