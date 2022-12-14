import React from 'react';
import { Story } from '@storybook/react';
import AreaLogada from './index';

export default {
	/* ๐ The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'AreaLogada',
	component: AreaLogada
};

// ๐ We create a โtemplateโ of how args map to rendering
function Template(args: any) {
	return <AreaLogada {...args} />;
}

// ๐ Each story then reuses that template
export const Primary: Story = Template.bind({});
Primary.args = {
	// descreva aqu as propriedades, ex:
	// text: 'teste',
	// backGroundColor: 'red'
};
