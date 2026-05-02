const Pagination = () => {
  return (
    <div>
      <h1>Pagination</h1>
      <b>Current Page : {currPage}</b>

      {
        displayData.map((item) => {
          return (
            <div>
              <img width={100} src={item.images[0]} />
            </div>
          )
        })
      }

      <button onClick={preHandler}>PreItem</button>
      <button onClick={nextHandler}>NextItem</button>
    </div>
    
  )
}