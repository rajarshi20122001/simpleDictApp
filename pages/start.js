import { Snippet } from 'next/font/google'
import React,{useState} from 'react'

const Start = () => {
  const[word,setword]=useState("Simple Dictionary App")

  const[meaning,setmeaning]=useState("Welcome to the world of words! Unlock the power of language with our cutting-edge dictionary app, your ultimate companion for all things linguistic. Whether you're an avid reader, a passionate writer, a language enthusiast, or simply seeking to enhance your vocabulary, our app is designed to be your go-to resource, bringing the world of words right to your fingertips.")

  const[partsoffspeech,setpartsoffspeech]=useState("")

  const getMeaning = async () =>{
      //get meaning of the word
      let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      let response = await res.json()
      let meaningText = response[0].meanings[0].definitions[0].definition;
      let exam = response[0]["meanings"][0].definitions[0].example;
      // console.log(exam)
      setmeaning(meaningText)
      setpartsoffspeech(exam)


  }

  const handleChange = (e) => {
    if(e.target.name=="word"){
        setword(e.target.value)
    }
  }
  return (
    
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{word}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{meaning}</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{partsoffspeech}</p>  
          </div>
          <div className="flex lg:w-2/3 w-full  flex-col mx-auto px-8  sm:px-0 ">
            <div className="relative flex-grow w-full">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Type a word</label>
              <input onChange={handleChange} id="full-name" name="word" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button onClick={getMeaning} className="text-white my-4  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Meaning</button>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default Start
