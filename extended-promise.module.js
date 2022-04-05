"use strict";

/*;
	@license:module:
		MIT License

		Copyright (c) 2022-present Richeve S. Bebedor <richeve.bebedor@gmail.com>

		@license:copyright:
			Richeve S. Bebedor

			<@license:year-range:2022-present;>

			<@license:contact-detail:richeve.bebedor@gmail.com;>
		@license:copyright;

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@license:module;
*/

const ExtendedPromise = (
	function ExtendedPromise( ){
		/*;
			@definition:
				@procedure:#ExtendedPromise
					@class;

					@description:
						Instantiate a better promise.
					@description;
				@procedure;

				@result:#result
					@type:
							object:as:ExtendedPromise
					@type;

					@description:
					@description;
				@result;
			@definition;
		*/

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
