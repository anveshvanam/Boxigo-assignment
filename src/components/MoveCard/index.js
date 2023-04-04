import './index.css'
import {HiOutlineArrowNarrowRight, HiOutlinePencil} from 'react-icons/hi'
import {AiFillHome, AiFillCheckSquare, AiFillWarning} from 'react-icons/ai'
import {TfiPackage} from 'react-icons/tfi'
import {GiPathDistance} from 'react-icons/gi'
import {FaTruckMoving} from 'react-icons/fa'

const MoveCard = props => {
  const {moveDetails, isExpanded, expandMoveCard} = props
  const {
    callBack,
    customStatus,
    dateCreated,
    dateOfCancel,
    dateOfComplete,
    distance,
    estimateAmount,
    estimateComparison,
    estimateId,
    estimateStatus,
    fromAddress,
    items,
    moveDateFlexible,
    movingFrom,
    movingOn,
    movingTo,
    newElevatorAvailability,
    newFloorNo,
    newHouseAdditionalInfo,
    newParkingDistance,
    oldElevatorAvailability,
    oldFloorNo,
    oldHouseAdditionalInfo,
    oldParkingDistance,
    orderDate,
    orderReviewed,
    packingService,
    propertySize,
    serviceType,
    status,
    storageItems,
    successfulPayments,
    toAddress,
    totalItems,
    unpackingService,
    userId,
  } = moveDetails

  const onClickExpand = () => {
    expandMoveCard(estimateId)
  }

  const renderAdditionalInfo = () => {
    const {inventory} = items
    // console.log(inventory)
    return (
      <div className="expanded-info-container">
        <div className="additional-info-container">
          <div className="additional-info">
            <h1 className="info-heading">Additional Information</h1>
            <p className="">Test Data</p>
          </div>
          <button type="button" className="edit-button">
            Edit Additional Info
          </button>
        </div>
        <div className="house-details-container">
          <div className="title-edit-btn-container">
            <h1 className="info-heading">House Details</h1>
            <button type="button" className="edit-button">
              Edit House Details
            </button>
          </div>
          <h1 className="info-heading orange-text">Existing House Details</h1>
          <div className="old-new-details-container">
            <div className="">
              <p className="bold-text">Floor No.</p>
              <p className="">{oldFloorNo}</p>
            </div>
            <div className="">
              <p className="bold-text">Elevator Available</p>
              <p className="">{oldElevatorAvailability}</p>
            </div>
            <div className="">
              <p className="bold-text">
                Distance from Elevator / Staricase to Truck
              </p>
              <p className="">{oldParkingDistance}</p>
            </div>
          </div>
          <h1 className="info-heading orange-text">New House Details</h1>
          <div className="old-new-details-container">
            <div className="">
              <p className="bold-text">Floor No.</p>
              <p className="">{newFloorNo}</p>
            </div>
            <div className="">
              <p className="bold-text">Elevator Available</p>
              <p className="">{newElevatorAvailability}</p>
            </div>
            <div className="">
              <p className="bold-text">
                Distance from Elevator / Staricase to Truck
              </p>
              <p className="">{newParkingDistance}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="move-card-container">
      <div className="from-to-container">
        <p className="from-text">
          <span className="from-to">From</span>
          <br />
          {movingFrom}
        </p>
        <HiOutlineArrowNarrowRight className="arrow-icon" />
        <p className="to-text">
          <span className="from-to">TO</span>
          <br />
          {movingTo}
        </p>
        <p className="to-text">
          <span className="from-to">Request#</span>
          <br />
          <span className="orange-text">{estimateId}</span>
        </p>
      </div>
      <div className="location-details-container">
        <p className="location-info">
          <span className="icon">
            <AiFillHome className="icon-home" />
          </span>
          {propertySize}
        </p>
        <p className="location-info">
          <span className="icon">
            <TfiPackage className="icon-home" />
          </span>
          {totalItems}
        </p>
        <p className="location-info">
          <span className="icon">
            <GiPathDistance className="icon-home" />
          </span>
          {distance}
        </p>
        <p className="location-info">
          <span className="icon">
            <FaTruckMoving className="icon-home" />
          </span>
          {movingOn}
          <HiOutlinePencil className="unstyled-icon" />
        </p>
        <p className="location-info">
          <span className="icon">
            <AiFillCheckSquare className="icon-home" />
          </span>
          is flexible
        </p>
        <div className="btns-container">
          <button
            className="view-details-button button"
            type="button"
            onClick={onClickExpand}
          >
            View move details
          </button>
          <button className="quotes-awaiting-button button" type="button">
            Quotes Awaiting
          </button>
        </div>
      </div>
      <p className="disclaimer">
        <AiFillWarning className="icon" />
        <span className="bold-text">Disclaimer: </span> Please update your move
        date before 2 days of shifting
      </p>
      {isExpanded ? renderAdditionalInfo() : ''}
      <hr className="h-line" />
    </div>
  )
}

export default MoveCard
