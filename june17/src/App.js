function App(){
    
    function doSomething(){
        alert(` Form is Submitted`);
    }

    return(
          <>
    <form onSubmit={doSomething}>
        <input type="text" />
    </form>
    </>


);

}

export default App;