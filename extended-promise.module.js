"use strict";

const ExtendedPromise = (
	function ExtendedPromise( ){
		if(
				(
						(
										this
							instanceof	ExtendedPromise
						)
					===	true
				)
		){
			(
					this
					.promiseHandler
				=	(
						{ }
					)
			);

			(
					this
					.promiseResult
				=	(
						new Promise(
								(
									function( resolve, reject ){
										(
												this
												.promiseHandler
												.resolvePromise
											=	(
													resolve
												)
										);

										(
												this
												.promiseHandler
												.rejectPromise
											=	(
													reject
												)
										);
									}
								)
								.bind( this )
							)
					)
			);
		}
		else{
			return	(
						new	ExtendedPromise( )
					);
		}
	}
);

ExtendedPromise.prototype.resolve = (
	function resolvePromise( ){
		this
		.promiseHandler
		.resolvePromise
		.apply(
			(
				this
				.promiseResult
			),

			(
				Array
				.from( arguments )
			)
		);

		return	(
					this
				);
	}
);

ExtendedPromise.prototype.reject = (
	function rejectPromise( ){
		this
		.promiseHandler
		.rejectPromise
		.apply(
			(
				this
				.promiseResult
			),

			(
				Array
				.from( arguments )
			)
		);

		return	(
					this
				);
	}
);

ExtendedPromise.prototype.then = (
	function promiseThen( ){
		this
		.promiseResult
		.then
		.apply(
			(
				this
				.promiseResult
			),

			(
				Array
				.from( arguments )
			)
		);

		return	(
					this
				);
	}
);

ExtendedPromise.prototype.catch = (
	function promiseCatch( ){
		this
		.promiseResult
		.catch
		.apply(
			(
				this
				.promiseResult
			),

			(
				Array
				.from( arguments )
			)
		);

		return	(
					this
				);
	}
);

ExtendedPromise.prototype.finally = (
	function promiseFinally( ){
		this
		.promiseResult
		.finally
		.apply(
			(
				this
				.promiseResult
			),

			(
				Array
				.from( arguments )
			)
		);

		return	(
					this
				);
	}
);

(
		module
		.exports
	=	(
			ExtendedPromise
		)
);
