5. What is the purpose of callback function as an second argument of 
{
  name: "John"
}
this.setState(() => {
  return { ...this.state, name: "Alex" }
} , () => {
  console.log(this.state.name)
})

console.log(this.state.name)


 const [loading, setLoading] = useState(false);

 setLoading(true);

 const temp = loading;

 useEffect(() => {
  const temp = loading;
 }, [loading])
















The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

Note: It is recommended to use lifecycle method rather than this callback function.

setState({ name: "John" }, () =>
  console.log(`The name has updated and component re-rendered, {this.state.name}`);
);