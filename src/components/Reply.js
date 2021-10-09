export const RecursivelyRenderedComponent = ({depth}) => {
    if (depth === 0) {
      // Base case
      return null
    }
    
    return (
      <>
        <h1>Depth: {depth}</h1>
        <RecursivelyRenderedComponent depth={depth - 1} />
      </>
    )
  }