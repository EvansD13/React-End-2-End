export default function ShowCard( { show } ) {
    return (
      <div className="show-card">
        <div>
            <img src = { show.image.medium }/>
        </div>
        <div>
          <div>
            { show.rating.average } / 10
          </div>
          <h2>{ show.name }</h2>
          <em>Languages: { show.language }, Premiered: { show.premiered }</em>
          <div dangerouslySetInnerHTML = { {__html: show.summary}  }></div>
        </div>
      </div>
    );
  }