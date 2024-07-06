import { useState, useEffect, useRef } from 'react';

import Navbar from './components/Navbar';
import Roundbar from './components/Roundbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import { CategoryIDContext } from './context';



import Lottie from "lottie-react";
import successAnim from "./assets/success.json";


import { BASE_URL } from './Config';

function App() {
  const [categoryId, setCategoryId] = useState(0);
  const [courses, setCourses] = useState([]);
  const [errors, setErrors] = useState([]);

  const [courseId, setCourseId] = useState(1);
  const [referrerName, setReferrerName] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [message, setMessage] = useState("");


  const lottieRef = useRef();

  useEffect(() => {
    fetch(`${BASE_URL}/courses`)
      .then(res => res.json())
      .then(res => setCourses(res.data));
  }, [])

  return (
    <div>
      <Navbar/>
      <Roundbar/>
      <Hero/>
      <CategoryIDContext.Provider value={{ categoryId: categoryId, setCategoryId: setCategoryId }}>
         <Courses/>
      </CategoryIDContext.Provider>
      <div className="w-full flex justify-center">
        <button className="w-[250px] p-4 bg-blue-900 hover:bg-blue-800
         rounded-lg text-white mb-5" onClick={(e) => {
          document.getElementById('modal').showModal();
         }}>Refer Now</button>
      </div>
      <dialog id="modal" className="modal">
          <div className="modal-box">
            <h2 className="text-2xl text-center font-bold mb-3" onChange={e => {
              document.getElementById("modal").showModal();
            }}>Refer A Course</h2>
            <div className="mx-auto">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Course</span>
                  <span className="label-text-alt"></span>
                </div>
                <select className="select select-bordered"
                  onChange={e => setCourseId(parseInt(e.target.value))}>
                  {
                    courses.map(course => (
                      <option key={`course-${course.id}`} value={course.id}>{ course.title }</option>
                    ))
                  }
                </select>
                <div className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt text-red-800 font-bold">{ errors.courseId }</span>
                </div>
              </label>
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">What is your name?</span>
                  <span class="label-text-alt"></span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full"
                  onChange={e => setReferrerName(e.target.value)} />
                <div class="label">
                  <span class="label-text-alt"></span>
                  <span class="label-text-alt text-red-800 font-bold">{ errors.referrerName }</span>
                </div>
              </label>
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">What is the name of referee?</span>
                  <span class="label-text-alt"></span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full"
                  onChange={e => setRefereeName(e.target.value)} />
                <div class="label">
                  <span class="label-text-alt"></span>
                  <span class="label-text-alt text-red-800 font-bold">{ errors.refereeName }</span>
                </div>
              </label>
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">And his/her email</span>
                  <span class="label-text-alt"></span>
                </div>
                <input type="email" placeholder="Type here" class="input input-bordered w-full"
                  onChange={e => setRefereeEmail(e.target.value)} />
                <div class="label">
                  <span class="label-text-alt"></span>
                  <span class="label-text-alt text-red-800 font-bold">{ errors.refereeEmail }</span>
                </div>
              </label>
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">Your Message</span>
                  <span class="label-text-alt"></span>
                </div>
                <textarea placeholder="Type here" class="textarea textarea-bordered w-full"
                  onChange={e => setMessage(e.target.value)}></textarea>
                <div class="label">
                  <span class="label-text-alt"></span>
                  <span class="label-text-alt text-red-800 font-bold">{ errors.message }</span>
                </div>
              </label>
            </div>
          <div className="modal-action">
            <button className="btn btn-primary" onClick={e => {
              console.log("Clicking....");
              fetch(`${BASE_URL}/referal`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  courseId,
                  refereeName,
                  referrerName,
                  refereeEmail,
                  message,
                })
              })
                .then(res => res.json())
                .then(res => {
                  console.log(res);
                  if("errors" in res) {
                    setErrors(res.errors);
                  } else {
                    document.getElementById("modal").close();
                    document.getElementById("successModal").showModal();
                    lottieRef.current.play();
                  }
                })
            }}>Refer</button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="successModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Sucess</h3>
                <div className="flex gap-5">
                    <Lottie className="w-[100px]" lottieRef={lottieRef} autoplay={false} animationData={successAnim} loop={false} />
                    <p className="py-4">Successfully sent referal. You two will both receive the revenue within 30 days
                    of the enrollment through this referal.</p>
                </div>
                
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
      </dialog>
      <footer className="text-white h-[300px] bg-gradient-to-b from-black to-gray-600">
        <div className="flex w-4/5 mx-auto">
          <div className="w-1/3 p-4">
            <img src="accredian-logo-dark.png" className="w-[160px] mt-4" alt="footer logo" />
          </div>
          <div className="w-1/3 p-4">
            Section 2
          </div>
          <div className="w-1/3 p-4">
            Section 3
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
