// function Greet() {
//     return <h1>Hello Vishwas !</h1>
// }

// const Greet = () => {
//     return <h1>Hello Vishwasssss !</h1>
// }

export const Greet = (props) => {
  const { name, heroName, children } = props
  return (
    <>
      <h1>
        Hello {name}! {heroName}
      </h1>
      {children}
    </>
  )
}

// export default Greet
