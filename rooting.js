import React from 'react'
import data from './data.json';

class Rooting extends React.Component {
  constructor() {
    super();
    this.state = {
       searchValues:'',
       filteredValues : data,
       isopen:true
    };
  }
  
 filfun = (e)=>{
    // alert(e.target.value)
 }
 searchfun=(e) =>{
    const search= e.target.value.toLowerCase();
    this.setState({searchValues: search});
    const filteredValues= data.filter(user => user.name.toLowerCase().includes(this.state.searchValues))
    this.setState({filteredValues})
 }


  render() { let isOpen = true;
    return(
    
    <div class="bg-gray-200">

        {/* filter and saerch */}


        <div class="flex flex-row space-x-40">
         <div class="">

       <div class="float-left relative mt-4 md:mt-0">
                 <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                   </span>

                   <input type="text" class="w-55 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" onChange={ this.searchfun } placeholder="Search"/>
       </div>
            

       </div>
       <div class="">
              <div x-data={isOpen= true } class="relative inline-block ">
                 <button onClick={isOpen = !isOpen} class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                 <span class="mx-1 ">filter</span>
                  <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                    </svg>
                     </button>

                   <div x-show={isOpen} 
                      onClick={isOpen = false}
                       class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                         >
                              <p onClick={ this.setState({searchValues:''})} class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                ALL
                                </p>
                             <p onClick={ this.setState({searchValues:'africa'})} class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                 Africa
                                </p>

                                     <p onClick={ this.setState({searchValues:'America'})} class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                    America
                             </p>
 
                             <p onClick={ this.setState({searchValues:'Asia'})} class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                 Asia
                     </p>
                     <p onClick={ this.setState({searchValues:'Europe'})} class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Europe
                      </p>

                            <p onClick={ this.setState({searchValues:'oceania'})} class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Oceania
                                        </p>
                                  </div>
                            </div>
            </div>
        </div>

        {/* coutries */}
        <div class="flex flex-row space-x-4">
            {this.state.filteredValues.map((nameObj)=>

        <div key= {nameObj.id}>
         <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img class="object-cover w-full h-56" src={nameObj.flags.svg} alt="avatar"/>

          <span href="#" class="block font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{nameObj.name}</span>

           <div class=" flex">
           <span href="#" class="block  font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Population:</span>
           <span class=" text-gray-700 dark:text-gray-200">{nameObj.population}</span>
            </div>
           <div class=" flex">
             <span href="#" class="block  font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Region:</span>
           <span class=" text-gray-700 dark:text-gray-200">{nameObj.region}</span>
            </div>
             <div class=" flex">
              <span href="#" class="block  font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Capital:</span>
              <span class=" text-gray-700 dark:text-gray-200">{nameObj.capital}</span>
             </div>
        </div>
    </div>

  )}</div>
  </div>
  )
}}

export default Rooting