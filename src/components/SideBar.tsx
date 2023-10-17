import { useMovieDataContext } from '../context';

const SideBar = () => {
    const { genres } = useMovieDataContext()

    //map through genres and list the titles in the sidebar
    return <aside style={sidebarStyle}>
        {genres?.map(obj => {
            return <div key={obj} style={sidebarItem}>
                {obj}
            </div>
        })}
    </aside>
}

//styling for sidebar
const sidebarStyle = {
    border: '1px solid green',
    paddingTop: 50
}

const sidebarItem = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
}

export default SideBar