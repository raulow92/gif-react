export const GifItem = ({id, title, url}) => (
    
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
)
