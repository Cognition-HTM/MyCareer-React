import { useState , useEffect , useContext , Fragment} from "react";
import { AuthContext } from "../../Context/AuthContext";
import { doc , getDoc} from "firebase/firestore";
import { db } from "../../Firebase";

import { Dialog, Transition } from '@headlessui/react'

import AddBlog from "./AddBlog";
export default function Blogs() {

    const [blogs, setBlogs] = useState([])
    const {currentUser} = useContext(AuthContext);
    const getBlogs = async() => {
      const list =  await getDoc(doc(db, 'blogs', currentUser.id))
      console.log(list.data().item)
      setBlogs(list.data().item);
    }
    useEffect(() => {
        getBlogs()
    },[])


    // Modals using 
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  

    return (
        <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Your Blogs</h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-gray-500">Collection of blogs written by you</p>
              {/* <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                  <button
                    type="button"
                    className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                    onClick={openModal}
                  >
                    Add +
                  </button>
                </div>
              </form> */}
            </div>
          </div>
          <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
      <AddBlog/>
            {blogs.map((post) => (
              <div key={post.title}>
                {/* <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p> */}
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-3">
                  <a href="#" className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                    Edit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  