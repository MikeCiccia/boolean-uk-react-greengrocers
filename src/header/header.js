import StoreItemList from './storeitemlist'

const Header = props => {
  const storeItems = props.storeItems

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <StoreItemList storeItems={storeItems} />
    </header>
  )
}

export default Header
