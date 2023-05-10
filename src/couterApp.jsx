import PropTypes from 'prop-types'

const CouterApp = ({ value }) => {
    return (
        <>
            <h1>CounterApp { value } </h1>

        </>
    )
}

export default CouterApp

CouterApp.propTypes = { 
    value: PropTypes.number.isRequired
}  