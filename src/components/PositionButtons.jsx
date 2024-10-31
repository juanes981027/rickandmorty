const PositionButtons = ({changePage, page}) => {
    return<>
        <button className="btn btn-primary" onClick={()=>changePage('previous')}>Previous </button>
        <label htmlFor="" className="page-label">Page {page}</label>
        <button className="btn btn-primary" onClick={()=>changePage('next')}> Next </button>
        
    </>
}
export default PositionButtons