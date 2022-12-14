import React from 'react';
import { Story } from '@storybook/react';
import Login from './index';

export default {
	/* ๐ The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Login',
	component: Login
};

// ๐ We create a โtemplateโ of how args map to rendering
function Template(args: any) {
	return <Login {...args} />;
}

// ๐ Each story then reuses that template
export const Primary: Story = Template.bind({});
Primary.args = {
	// descreva aqu as propriedades, ex:
	// text: 'teste',
	// backGroundColor: 'red'
};
