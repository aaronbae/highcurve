import '../styles/banner.css'

export default function Banner(promps) {
  return (
    <div className="banner-wrapper" style={{height: promps.height}}>
      <div className="banner-inner">
        {promps.children}
      </div>
    </div>
  )
}