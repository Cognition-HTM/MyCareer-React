/* Schema backend */
// const meets = [
//     {
//       id: int,
//       name: str,
//       date: str,
//       timing: str,
//       isCompleted: boolean,
//     },
    
//   ]
  
const meets = [
        {
          id: 1,
          name: "Introduction to IOT",
          date: "17 Nov 2022",
          timing: "4 : 30 PM",
          isCompleted: true,
        }, 
      ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Meet() {
    return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <div>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Meets</h2>
        <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
          <p className="text-xl text-gray-500">meet your meet to meet.</p>
          <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
            <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
              <button
                type="button"
                className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
              >
                Add +
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
           <table className="min-w-full divide-y divide-gray-300">
             <thead>
               <tr>
                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                   Title
                 </th>
                 <th
                   scope="col"
                   className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                 >
                   Date
                 </th>
                 <th
                   scope="col"
                   className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                 >
                   Timing
                 </th>
                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                   <span className="sr-only">Select</span>
                 </th>
               </tr>
             </thead>
             <tbody>
               {meets.map((meet, planIdx) => (
                 <tr key={meet.id}>
                   <td
                     className={classNames(
                       planIdx === 0 ? '' : 'border-t border-transparent',
                       'relative py-4 pl-4 sm:pl-6 pr-3 text-sm'
                     )}
                   >
                     <div className="font-medium text-gray-900">
                       {meet.name}
                       {'  '}
                       {meet.isCompleted ? <span className="text-indigo-600">( Upcoming )</span> : null}
                     </div>
                     <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                       <span>
                         {meet.date} / {meet.timing}
                       </span>
                       <span className="hidden sm:inline"> · </span>
                     </div>
                     {planIdx !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" /> : null}
                   </td>
                   <td
                     className={classNames(
                       planIdx === 0 ? '' : 'border-t border-gray-200',
                       'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                     )}
                   >
                     {meet.date}
                   </td>
                   <td
                     className={classNames(
                       planIdx === 0 ? '' : 'border-t border-gray-200',
                       'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                     )}
                   >
                     {meet.timing}
                   </td>
                   
                   <td
                     className={classNames(
                       planIdx === 0 ? '' : 'border-t border-transparent',
                       'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
                     )}
                   >
                     <button
                       type="button"
                       className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                       disabled={!meet.isCompleted}
                     >
                       Meet <span className="sr-only">, {meet.name}</span>
                     </button>
                     {planIdx !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-200" /> : null}
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>

      




    </div>
  </div>
    )
  }
  