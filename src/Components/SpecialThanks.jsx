import HaroldSpace from '../Images/HaroldSpace.jpeg'
import YasserSoccer from '../Images/YasserSoccer.jpeg'
import KeeanuGames from '../Images/KeeanuGames.jpeg'
import "./SpecialThanks.css";

const SpecialThanks = () => {
  return (
    <div className='special-thanks-container'>
      <h3 className='special-thanks'>Special Thanks to these amazing developers for helping us squash bugs!</h3>

      <div className='harold-container'>
              <img
                  className='harold'
                  src={HaroldSpace}
                  alt='Man in space'
                  height='350px' width='700px' />

        <div className='text-overlay'>
          <p>I'm over the moon</p>
        </div>
      </div>

      <div className='yasser-container'>
              <img
                  className='yasser'
                  src={YasserSoccer}
                  alt='Man playing soccer'
                  height='350px' width='700px' />

        <div className='text-overlay'>
          <p>I'll kick it with you if you have goals</p>
        </div>
      </div>

      <div className='keeanu-container'>
              <img
                  className='keeanu'
                  src={KeeanuGames}
                  alt='Man playing video games'
                  height='350px' width='700px' />

        <div className='text-overlay'>
          <p>Life is a game, but idk why</p>
        </div>
      </div>
    </div>
  )
}

export default SpecialThanks
