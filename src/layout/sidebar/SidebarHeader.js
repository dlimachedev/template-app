import React from 'react'

export const SidebarHeader = () => {
	return (
		<div className="sidebarHeader">
			<img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/>
		</div>
	)
}
