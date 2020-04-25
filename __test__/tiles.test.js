import { Tiles } from '../src/Components';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeData = {
    confirmed: 100,
    deaths: 100,
    recovered: 100
}

describe('<Tiles/>', () => {
    it('displays Confirmed, Recovered, Deaths tiles', () => {
        const wrapper = shallow(<Tiles data={fakeData}/>);
        const tiles = wrapper.find('Style__Data');
        let titles = [];
        tiles.children().forEach(tile => { titles.push(tile.props().title) });
        expect(titles).toStrictEqual(["Confirmed", "Recovered", "Deaths"]);
    }); 

    it('matches snapshot', () => {
        const wrapper = shallow(<Tiles data={fakeData}/>);
        
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
