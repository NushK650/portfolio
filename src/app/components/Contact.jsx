import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="pt-20 pb-20 bg-gray-50 h-full">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Contact Me
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Feel free to reach out! You can contact me via my email: <a href="">TanushKumar650@gmail.com</a>
       , number: 650-218-4892 or through the links
        bellow.
      </p>
      <div className="flex justify-center gap-10">
        <a href="https://github.com/NushK650">
          <img src="./github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/tanush-kumar-aab68135b/details/skills/">
          <img src="./linkedin.png" alt="linkedin" />
        </a>
        <a href="./ResumeV4.pdf">
          <img src="./resume.png" alt="resume" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default Contact