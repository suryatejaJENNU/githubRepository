import './index.css'

const LanguageFilterItem = props => {
  const {egg, fun} = props
  const {id, language} = egg

  const bow = () => {
    fun(id)
  }
  return (
    <li className="understand">
      <button onClick={bow}>{language}</button>
    </li>
  )
}

export default LanguageFilterItem
