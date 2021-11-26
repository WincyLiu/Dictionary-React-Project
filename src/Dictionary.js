import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  
   function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    
     let pexelsApiKey =
      "563492ad6f917000010000019a5c44eba558428ca26c00e3e336d8cc";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
    <h1 className="text-center mt-3 mb-3"> Dictionary</h1>
      <form onSubmit={search}>
        <input  className="form-control"
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
          placeholder="Search for a word"
        />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
