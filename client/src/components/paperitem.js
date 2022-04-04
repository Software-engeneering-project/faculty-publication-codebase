function Paperitem (props) {
	console.log(props)
	return (
        <li onClick={()=>{window.location.href = '/paperdetails/' + props.paperinfo.id}}>{props.paperinfo.year}</li>
	)
}

export default Paperitem 



