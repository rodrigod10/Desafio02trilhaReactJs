import { useContext } from "react"
import { SelectedCategoryContext } from "../App"
import { Button } from "../components/Button";

export function SideBar({}) {

  const { genres, handleClickButton, selectedGenreId } = useContext(SelectedCategoryContext);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <span><h6> Updated by: <p> Rodrigo Moliterno </p></h6></span>
      
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}