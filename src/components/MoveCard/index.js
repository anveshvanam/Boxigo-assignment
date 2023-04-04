import './index.css'
import {HiOutlineArrowNarrowRight, HiOutlinePencil} from 'react-icons/hi'
import {AiFillHome, AiFillCheckSquare} from 'react-icons/ai'
import {TfiPackage} from 'react-icons/tfi'
import {GiPathDistance} from 'react-icons/gi'
import {FaTruckMoving} from 'react-icons/fa'

const MoveCard = props => {
  const {moveDetails} = props
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
          <button className="view-details-button button" type="button">
            View move details
          </button>
          <button className="quotes-awaiting-button button" type="button">
            Quotes Awaiting
          </button>
        </div>
      </div>
      <hr className="h-line" />
    </div>
  )
}

export default MoveCard
