import { Item } from './Item'

export const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return "No items to display." 
  }
  return items.map((item) => (
    <Item key={item.id} item={item} isEven={item.id % 2 === 0}/>
  ))
}

 