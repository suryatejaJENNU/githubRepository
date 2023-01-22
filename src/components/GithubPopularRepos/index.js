import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {productsList: [], isLoading: false, apiStatus: false}

  query = async id => {
    this.setState({isLoading: true})
    console.log(id)
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData[0])
      console.log(fetchedData.popular_repos)
      const updatedData = fetchedData.popular_repos.map(product => ({
        id: product.id,
        name: product.name,
        avatarUrl: product.avatar_url,
        forksCount: product.forks_count,
        issuesCount: product.issues_count,
        starsCount: product.stars_count,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: true,
      })
    }
  }

  render() {
    const {productsList, isLoading, apiStatus} = this.state
    console.log(productsList)
    return (
      <div className="bg-container">
        <h1 className="main-heading">Popular</h1>
        <ul type="none" className="items">
          {languageFiltersData.map(each => (
            <LanguageFilterItem egg={each} fun={this.query} key={each.id} />
          ))}
        </ul>
        {apiStatus && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
          />
        )}
        {isLoading && (
          <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
        )}
        {!isLoading && (
          <ul type="none" className="hp">
            {productsList.map(each => (
              <RepositoryItem allData={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
