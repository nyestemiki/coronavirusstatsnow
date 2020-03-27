import React, { Component } from 'react';
import { Style, Top, Select, Language, Data, DataContainer, Number, Title, Updated } from './Style';
import localizationData from './localization';

const formatNumber = num => 
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export default class App extends Component {
  state = {
    data: {},
    countries: {},
    date: "",
    lang: "en"
  }

  setLanguage = event => {
    this.setState({ lang: event.target.dataset.lang });
  }

  localization = word => localizationData[word] && localizationData[word][this.state.lang];

  updateDate = () => {
    const now = new Date();
    const mdy = now.toLocaleDateString();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const date = mdy + " " + hour + ":" + (minute > 9 ? minute : "0" + minute);

    this.setState({ date });
  }

  selectCountry = () => {
    const selector = document.querySelector('#countySelector');
    const countryCode = selector.options[selector.selectedIndex].value;

    if (countryCode === 'world') {
      fetch('https://covid19.mathdro.id/api')
        .then(res => res.json())
        .then(data => this.setState({ data }));
    } else {
      fetch(`https://covid19.mathdro.id/api/countries/${countryCode}`)
        .then(res => res.json())
        .then(data => this.setState({ data }));
    }

    this.updateDate();
  }

  componentDidMount() {
    fetch('https://covid19.mathdro.id/api')
      .then(res => res.json())
      .then(data => this.setState({ data }));
    
    fetch('https://covid19.mathdro.id/api/countries')
      .then(res => res.json())
      .then(countries => this.setState({ countries: countries.countries }));

    this.updateDate();
  }

  render() {
    if (this.state.data.length === 0 || this.state.countries.length === 0) {
      return <p>Loading...</p>
    }

    return (
      <Style>
        <Top>
          <Select onChange={this.selectCountry} id="countySelector">
            <option key="world" value="world">{this.localization("World") || "World"}</option>
            {Array.from(this.state.countries).map(({ name, iso2 }) => 
              <option value={iso2} key={iso2}>{name}</option>
            )}
          </Select>
          <Language>
            <img data-lang="en" alt="en" src="/imgs/en.jpg" onClick={this.setLanguage}/>
            <img data-lang="hu" alt="hu" src="/imgs/hu.jpg" onClick={this.setLanguage}/>
            <img data-lang="ro" alt="ro" src="/imgs/ro.jpg" onClick={this.setLanguage}/>
            <img data-lang="de" alt="de" src="/imgs/de.jpg" onClick={this.setLanguage}/>
          </Language>
        </Top>

        <Data>
          <DataContainer>
            <Number>
            {this.state.data.confirmed && 
              formatNumber(this.state.data.confirmed.value)}
            </Number>
            <Title>{this.localization("Confirmed") || "Confirmed"}</Title>
          </DataContainer>
          <DataContainer>
            <Number>
              {this.state.data.recovered && 
                formatNumber(this.state.data.recovered.value)}
            </Number>
            <Title>{this.localization("Recovered") || "Recovered"}</Title>
          </DataContainer>
          <DataContainer>
            <Number>
              {this.state.data.deaths && formatNumber(this.state.data.deaths.value)}
            </Number>
            <Title>{this.localization("Deaths") || "Deaths"}</Title>
          </DataContainer>
        </Data>
        <Updated>
          <span>{this.localization("Updated") || "Updated"}</span>
          <span>{this.state.date}</span>
        </Updated>
      </Style>
    );
  }
}