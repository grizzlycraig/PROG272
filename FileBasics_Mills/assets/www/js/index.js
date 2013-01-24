/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
			console.log("csc: request file callback");			
			$("#rootName").html("csc Root Directory: " + fileSystem.root.name);
			showDirectories(fileSystem.root);
		});        
        
        
        
        
    }
    
    var showDirectories = function(directoryEntry) {
	console.log("csc: Directory name=" + directoryEntry.name);
	if (!directoryEntry.isDirectory) {
		console.log('csc: listDir shows incorrect type');
	}	

	var directoryReader = directoryEntry.createReader();
	directoryReader.readEntries(function(entries) {
		var dirContent = $('#dirContent');
		var fileContent = $('#fileContent');			

		// Find the directories and files
		var directories = [];
		var files = [];
		for (var i = 0; i < entries.length; ++i) {// sort entries
			var entry = entries[i];
			if (entry.isDirectory && entry.name[0] !== '.') {
				directories.push(entry);
			} else if (entry.isFile && entry.name[0] !== '.') {
				files.push(entry);
			}
		}

                // Display the directories and files
		dirContent.empty();
		var sortedArray = directories.concat(files);
		for ( i = 0; i < sortedArray.length; ++i) {
			var entry2 = sortedArray[i];	
			if (entry2.isDirectory) {
				dirContent.append("<li>" + entry2.name + "</li>");		
			} else if (entry2.isFile) {
				fileContent.append("<li>" + entry2.name + "</li>");					
			}
		}
	}, function(error) {
		console.log('listDir readEntries error: ' + error.code);
	});
};

    
    
};
