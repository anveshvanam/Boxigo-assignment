import './index.css'
import {MdKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'

const InventoryCard = props => {
  const {cardDetails, isActive, onUpdateActiveItem} = props
  const {displayName, category, id} = cardDetails

  const onClickItem = () => {
    console.log(isActive)
  }

  const onToggleItem = () => {
    onUpdateActiveItem(id)
  }

  return (
    <>
      <li className="inventory-item" onClick={onClickItem}>
        <p className="orange-text">
          {displayName}{' '}
          <span className="orders-quantity">{category.length}</span>
        </p>
        <button type="button" className="icon-btn" onClick={onToggleItem}>
          {!isActive ? (
            <MdOutlineKeyboardArrowDown className="inventory-arrow-icon" />
          ) : (
            <MdKeyboardArrowUp className="inventory-arrow-icon" />
          )}
        </button>
      </li>
      {isActive ? (
        <ul className="category-list">
          <li className="">
            <h1 className="info-heading item-name">
              {category[0].displayName}
            </h1>
            <ul className="items-within-category">
              {category[0].items.map(eachItem => (
                <li className="item-within-category-item">
                  <div>
                    <p>{eachItem.displayName}</p>
                    <p className="item-type">
                      {eachItem.typeOptions ? eachItem.type[0].option : ''}
                    </p>
                  </div>
                  <div>
                    <p>{eachItem.qty}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className="">
            <h1 className="info-heading item-name">
              {category[1].displayName}
            </h1>
            <ul className="items-within-category">
              {category[1].items.map(eachItem => (
                <li className="item-within-category-item">
                  <div>
                    <p>{eachItem.displayName}</p>
                    <p className="item-type">
                      {eachItem.typeOptions ? eachItem.type[1].option : ''}
                    </p>
                  </div>
                  <div>
                    <p>{eachItem.qty}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ) : (
        ''
      )}
    </>
  )
}

export default InventoryCard
