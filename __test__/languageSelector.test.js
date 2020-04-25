import { LanguageSelector } from '../src/Components';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<LanguageSelector/>', () => {
    it('displays the four flags', () => {
        const wrapper = shallow(<LanguageSelector />);
        const flags = wrapper.find('Style__Languages');
        let imgSrcs = [];
        flags.children().forEach(flag => { imgSrcs.push(flag.props().src) });
        
        expect(imgSrcs[0]).toBe("/imgs/en.jpg");
        expect(imgSrcs[1]).toBe("/imgs/hu.jpg");
        expect(imgSrcs[2]).toBe("/imgs/ro.jpg");
        expect(imgSrcs[3]).toBe("/imgs/de.jpg");
   }); 

    it('matches snapshot', () => {
        const wrapper = shallow(<LanguageSelector />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
