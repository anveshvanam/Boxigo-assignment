import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import {FaTruckMoving} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {AiOutlineLogout} from 'react-icons/ai'
import MoveCard from '../MoveCard'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    movesList: [],
    apiStatus: apiStatusConstants.initial,
    expandedItem: '',
  }

  componentDidMount() {
    this.fetchData()
  }

  expandMoveCard = id => {
    const {expandedItem} = this.state
    if (id === expandedItem) {
      this.setState({expandedItem: ''})
    } else {
      this.setState({expandedItem: id})
    }
  }

  fetchData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch('http://test.api.boxigo.in/sample-data/')
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok) {
      this.setState({apiStatus: apiStatusConstants.success})
      const updatedData = data.Customer_Estimate_Flow.map(eachItem =>
        this.formatData(eachItem),
      )
      this.setState({movesList: updatedData})
      console.log(updatedData)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  formatData = item => ({
    callBack: item.call_back,
    customStatus: item.custom_status,
    dateCreated: item.date_created,
    dateOfCancel: item.date_of_cancel,
    dateOfComplete: item.date_of_complete,
    distance: item.distance,
    estimateAmount: item.estimateAmount,
    estimateComparison: item.estimate_comparison,
    estimateId: item.estimate_id,
    estimateStatus: item.estimate_status,
    fromAddress: {
      firstName: item.from_address.firstName,
      fromAddress: item.from_address.fromAddress,
      fromLocality: item.from_address.fromLocality,
    },
    items: {
      inventory: item.items.inventory,
      customItems: item.items.customItems,
    },
    moveDateFlexible: item.move_date_flexible,
    movingFrom: item.moving_from,
    movingOn: item.moving_on,
    movingTo: item.moving_to,
    newElevatorAvailability: item.new_elevator_availability,
    newFloorNo: item.new_floor_no,
    newHouseAdditionalInfo: item.new_house_additional_info,
    newParkingDistance: item.new_parking_distance,
    oldElevatorAvailability: item.old_elevator_availability,
    oldFloorNo: item.old_floor_no,
    oldHouseAdditionalInfo: item.old_house_additional_info,
    oldParkingDistance: item.old_parking_distance,
    orderDate: item.order_date,
    orderReviewed: item.order_reviewed,
    packingService: item.packing_service,
    propertySize: item.property_size,
    serviceType: item.service_type,
    status: item.status,
    storageItems: item.storage_items,
    successfulPayments: item.successfulPayments,
    toAddress: {
      firstName: item.to_address.firstName,
      toAddress: item.to_address.toAddress,
      toLocality: item.to_address.toLocality,
    },
    totalItems: item.total_items,
    unpackingService: item.unpacking_service,
    userId: item.user_id,
  })

  renderAppSuccessView = () => {
    const {movesList, expandedItem} = this.state

    return (
      <div className="bg-container">
        <div className="sidebar">
          <li className="sidebar-list-item active-item">
            <button type="button" className="sidebar-btn">
              <FaTruckMoving className="sidebar-icon" />
              MY MOVES
            </button>
          </li>
          <li className="sidebar-list-item">
            <button type="button" className="sidebar-btn">
              <CgProfile className="sidebar-icon" />
              MY PROFILE
            </button>
          </li>
          <li className="sidebar-list-item">
            <button type="button" className="sidebar-btn">
              <HiOutlineBuildingOffice2 className="sidebar-icon" />
              GET QUOTE
            </button>
          </li>
          <li className="sidebar-list-item">
            <button type="button" className="sidebar-btn">
              <AiOutlineLogout className="sidebar-icon" />
              LOGOUT
            </button>
          </li>
        </div>
        <div className="main-container">
          <h1 className="heading">MY MOVES</h1>
          <ul className="moves-list">
            {movesList.map(eachItem => (
              <MoveCard
                moveDetails={eachItem}
                key={eachItem.estimateId}
                isExpanded={eachItem.estimateId === expandedItem}
                expandMoveCard={this.expandMoveCard}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ec5642"
        ariaLabel="three-dots-loading"
      />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view">
      <h1 className="heading">There seems to a Server Error..</h1>
    </div>
  )

  renderApp = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAppSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return this.renderApp()
  }
}

export default Home
