import { Grid } from '@libs/react-component'
import './index.css'

export const Header = () => {
  return (
    <header className="header">
      <Grid cell={8} className="header__body">
        <h1>conduit</h1>
        <nav className="header__nav">
          <article>Home</article>
        </nav>
      </Grid>
    </header>
  )
}
