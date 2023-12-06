const Pagination = ({ page, lastpage, setpage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setpage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        setpage((prevState) => prevState - 1)
        scrollTop()
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 
        text-color-primary text-2xl">
        <button onClick={handlePrevPage} className="transition-all 
        hover:text-color-accent">Prev</button>
      
        <p1>{page} of {lastpage}</p1>
        
        <button onClick={handleNextPage} className="transition-all 
        hover:text-color-accent">Next</button>
        </div>
    )
}


export default Pagination