
const Form = (props) => {
    return <form onSubmit={props.onSubmit}>
        <Button type="submit">{props.typeName}</Button>
    </form>
}

export default Form;



//export this functional component where one needs to use form
