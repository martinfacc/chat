import React from 'react'
import { Popover, PopoverContainer } from './styles'
import propTypes from 'prop-types'
import classNames from 'classnames'
import useClickOutside from '@/hooks/useClickOutside'

const PopoverComponent = ({ children, isOpen, close }) => {
	const ref = React.useRef(null)
	useClickOutside(ref, close)

	React.useEffect(() => {
		if (ref.current) {
			const { left, top, height, width } = ref.current.getBoundingClientRect()
			const { innerWidth, innerHeight } = window
			const popover = ref.current
			const popoverWidth = popover.offsetWidth
			const popoverHeight = popover.offsetHeight
			const isTooCloseToRightEdge = left + width + popoverWidth > innerWidth
			const isTooCloseToBottomEdge = top + height + popoverHeight > innerHeight
			popover.style.left = isTooCloseToRightEdge ? 'auto' : '100%'
			popover.style.right = isTooCloseToRightEdge ? '0' : 'auto'
			popover.style.top = isTooCloseToBottomEdge ? 'auto' : '100%'
			popover.style.bottom = isTooCloseToBottomEdge ? '0' : 'auto'
		}
	}, [isOpen])

	return (
		<PopoverContainer>
			<Popover
				className={classNames({
					'is-open': isOpen,
				})}
				ref={ref}
			>
				{children}
			</Popover>
		</PopoverContainer>
	)
}

PopoverComponent.propTypes = {
	children: propTypes.node.isRequired,
	isOpen: propTypes.bool.isRequired,
	close: propTypes.func.isRequired,
}

export default PopoverComponent
