import { Tile } from '../src/Components';
import { shallow } from 'enzyme';

const fakeTile = { 
    title: "title", 
    number: 123456789 
};

describe('<Tile/>', () => {
    it('displays title properly', () => {
        const wrapper = shallow(<Tile {...fakeTile}/>);
        const Title = wrapper.find('Style__Title');

        expect(Title.dive().text()).toBe(fakeTile.title);
   }); 

   it('renders countup properly', () => {
        const wrapper = shallow(<Tile {...fakeTile}/>);
        const CountUp = wrapper.find('CountUp');

        expect(CountUp).toBeTruthy();
    }); 
});
