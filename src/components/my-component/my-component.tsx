import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'x-google-maps',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() width: string = "600";
  @Prop() height: string = "300";
  @Prop() apiKey: string;
  @Prop() address: string = "Xencov Software";
  @Prop() zoom: string = "16";
  @Prop() mapType: string = "roadmap";

  render() {
    const url = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(this.address)}&key=${this.apiKey}&zoom=${this.zoom}&maptype=${this.mapType}`;

    return (
      <div>
        <iframe width={this.width} height={this.height} frameborder="0" src={url}/>
      </div>
    );
  }
}
