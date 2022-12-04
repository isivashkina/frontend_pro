const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
const todos = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: true,
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
    }
];



class List extends React.Component {
    render() {
        const { arr = [] } = this.props;
        return <ul > {arr.map((item, index) =>
            <li style={item.completed ? { color: `pink` } : { color: `grey` }} key={index}>{item.title} <Button text={item.completed ? `TRUE` : `FALSE`} /> </li>)}
        </ul>
    }
};

class Button extends React.Component {
    render() {
        const { text } = this.props;
        let BtnStyle = { background: text === `TRUE` ? `pink` : `silver ` };
        return <button style={BtnStyle}>{text}</button>
    }
}

const App = <React.Fragment>
    <List arr={todos} />
</React.Fragment>

root.render(App);
